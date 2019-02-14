<template>
  <card id="file-upload">
    <vue-snotify></vue-snotify>

    <form>
      <input
        v-on:change="changeFile"
        type="file"
        name="uploadFile"
        id="uploadFile"
        ref="uploadFile"
        style="display:none"
      >
      <input
        type="text"
        id="fileName"
        v-model="fileName"
        v-on:click="initFile"
        placeholder="click here to upload file"
        readonly="readonly"
      >
      <input
        type="button"
        :disabled="!fileName.length && !upload.progress"
        value="upload"
        v-on:click="fileUploadHandler"
        id="uploadButton"
      >
    </form>
    <progress-bar :progress="uploadProgress"></progress-bar>
  </card>
</template>
<script>
import Card from "@/components/Card.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import axios from "axios";
export default {
  name: "ImportForm",
  components: {
    Card,
    ProgressBar
  },
  watch: {
    uploadProgress(value) {
      if (value >= 100) {
        this.file = {};
        this.fileName = "";
        this.$snotify.success("upoaded csv successfully", {
          timeout: 5000
        });
      }
    }
  },
  methods: {
    fileUploadHandler(event) {
      let file = this.file;
      let upload = this.upload;
      let progress = this.progress;
      let data = new FormData();
      data.append("file", file);
      let url = `/import`;
      axios
        .post(url, data, {
          onUploadProgress(progressEvent) {
            if (progressEvent.lengthComputable) {
              let { loaded, total } = progressEvent;
              upload.loaded = loaded;
              upload.total = total;
            }
          }
        })
        .then(resp => {
          progress = false;
        })
        .catch(err => {
          progress = false;
        });
    },
    initFile() {
      this.upload.loaded = 0;
      this.upload.total = 0;
      this.progress = true;
      this.$refs.uploadFile.click();
    },
    changeFile(event) {
      let $elm = event.target;
      let { name, type, size } = $elm.files[0];
      let flag = this._valdate($elm.files[0]);
      if (!flag) {
        return;
      }
      this.fileName = name;
      this.file = $elm.files[0];
    },
    _valdate({ type, size }) {
      let flag = true;
      let inMb = size / (1024 * 1024);
      if (type !== "text/csv") {
        this.$snotify.error("only csv files allowed", {
          timeout: 5000
        });
        flag = false;
      }
      if (inMb > 50) {
        debugger;
        this.$snotify.error(`file size can't exceed 50 Mb`, {
          timeout: 5000
        });
        flag = false;
      }
      return flag;
    }
  },
  computed: {
    uploadProgress() {
      let { loaded, total } = this.upload;
      if (total === 0) {
        return 0;
      }
      let per = Math.round((loaded / total) * 100);
      return per;
    }
  },
  data() {
    return {
      fileName: "",
      file: {},
      upload: {
        progress: false,
        loaded: 0,
        total: 0
      }
    };
  }
};
</script>
<style lang="scss" scoped>
#file-upload {
  display: grid;
  grid-template-rows: auto;
  #uploadFile {
    display: none;
  }
  #fileName {
    cursor: pointer;
    width: calc(100vw / 2);
    padding: 10px;
    border: 1px solid $accent;
    border-right: none;
  }
  #uploadButton {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: $accent;
    color: $content;
    padding: 11px;
    min-width: 90px;
    &:disabled {
      background-color: lighten($accent, 40);
      cursor: not-allowed;
    }
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

