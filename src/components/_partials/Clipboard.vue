<template>
  <!-- <div class="clipboard"> -->
    <div v-if="canCopy" class="clipboard--wrapper">
      <button aria-label="Copy" class="clipboard--button btn" @click="copy(source); copied();">
        <svg v-if="isCopying" height="16" viewBox="0 0 16 16" version="1.1" width="16" class="octicon octicon--copy">
          <path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path>
        </svg>
        <svg v-else height="16" viewBox="0 0 16 16" version="1.1" width="16" class="octicon octicon--check">
          <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
        </svg>
        <span class="sr-only">Copy</span>
      </button>
    </div>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
// import Header from "@/components/_partials/Header.vue";
export default {
  name: "Clipboard",
  props: ["source"],
  components: {
    // Header,
  },
  data() {
    return {
      canCopy: false,
      isCopying: true,
    };
  },
  created() {
    this.canCopy = !!navigator.clipboard;
  },
  methods: {
    async copy(s) {
      await navigator.clipboard.writeText(s);
      // alert('Copied!');
    },
    copied() {
      this.isCopying = false;
      setTimeout(() => {
        this.isCopying = true;
      }, 5000);
    },
  },
};
</script>

<style scoped>
.clipboard {
  /* margin-bottom: 16px;
  position: relative !important; */
}
.clipboard--wrapper {
  animation: fade-out 0.2s both;
  display: block;
  position: absolute !important;
  right: 0 !important;
  top: 0 !important;
}
.clipboard--button {
  position: relative;
  padding: 0 !important;
  margin: 10px 10px !important;
}
.sr-only {
  display: none;
}
.btn {
  background-color: #fafbfc;
  border-color: rgb(27 31 35 / 15%);
  box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  color: #24292e;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid;
  border-radius: 6px;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 5px 16px;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}
.btn:focus {
  border-color: rgb(27 31 35 / 15%);
  box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
  outline: none;
}
.btn:active {
  background-color: #ebecf0;
  border-color: rgb(35 80 125 / 10%);
  transition: none;
}
.btn.hover,
.btn:hover {
  background-color: #f3f4f6;
  border-color: rgb(27 31 35 / 15%);
  transition-duration: 0.1s;
  text-decoration: none;
}
.btn .octicon {
  color: #6a737d;
  margin-right: 4px;
  vertical-align: text-bottom;
}
.octicon {
  fill: currentColor;
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  margin: 8px !important;
}
.octicon.octicon--check {
  display: block !important;
  color: #22863a !important;
}
</style>