<template>
  <div class="quill-editor-box w-full leading-none">
    <quill-editor
      ref="QuillEditorRef"
      :options="options"
      v-bind="$attrs"
      @change="onEditorChange($event)"
      @ready="onEditorReady($event)"
    />
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'

//  富文本编辑器配置
const options = {
  modules: {
    // 工具栏配置
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
      ['blockquote', 'code-block'], // 引用  代码块-----['blockquote', 'code-block']
      [{ header: 1 }, { header: 2 }], // 1、2 级标题-----[{ header: 1 }, { header: 2 }]
      [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
      [{ script: 'sub' }, { script: 'super' }], // 上标/下标-----[{ script: 'sub' }, { script: 'super' }]
      [{ indent: '-1' }, { indent: '+1' }], // 缩进-----[{ indent: '-1' }, { indent: '+1' }]
      [{ direction: 'rtl' }], // 文本方向-----[{'direction': 'rtl'}]
      [{ size: ['small', false, 'large', 'huge'] }], // 字体大小-----[{ size: ['small', false, 'large', 'huge'] }]
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题-----[{ header: [1, 2, 3, 4, 5, 6, false] }]
      [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
      [{ font: [] }], // 字体种类-----[{ font: [] }]
      [{ align: [] }], // 对齐方式-----[{ align: [] }]
      ['clean'], // 清除文本格式-----['clean']
      ['image', 'video'] // 链接、图片、视频-----['link', 'image', 'video']
    ]
  },
  theme: 'snow',
  placeholder: '请输入同意协议...'
}

export default {
  name: 'QuillEditor',
  components: {
    quillEditor
  },
  props: {
    // value: {
    //   type: [String, Number]
    // },
    height: {
      type: String,
      default: 'calc(100vh - 250px)'
    }
  },
  data() {
    return {
      content: '',
      options
    }
  },
  created() {},
  methods: {
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },

    onEditorChange({ quill, html, text }) {
    //   console.log('editor change!', quill, html, text)
      this.$emit('input', html)
    }
  }
}
</script>

<style lang="scss">
.quill-editor-box {
  .quill-editor {
    min-height: 400px;
  }
  p {
    margin: 10px;
  }

  .ql-toolbar.ql-snow,
  .ql-container.ql-snow {
    border-color: #ebeef5;
    border-radius: 10px;
  }

  .ql-editor {
    height: 450px;
  }
  // 富文本汉化
  .ql-snow .ql-picker.ql-size .ql-picker-label::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: '14px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    content: '10px';
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    content: '18px';
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    content: '32px';
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: '文本';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    content: '标题1';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    content: '标题2';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    content: '标题3';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    content: '标题4';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    content: '标题5';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    content: '标题6';
  }

  .ql-snow .ql-picker.ql-font .ql-picker-label::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: '标准字体';
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    content: '衬线字体';
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    content: '等宽字体';
  }
}
</style>
