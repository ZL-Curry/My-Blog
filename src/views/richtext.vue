<template>
  <div class="editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          加粗
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          斜体
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          水平删除
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          下划线
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
         代码块
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <!-- <icon name="paragraph" /> -->
          无用
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <!-- <icon name="ul" /> -->
          ul
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <!-- <icon name="ol" /> -->
          ol
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <!-- <icon name="quote" /> -->
          引号
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <!-- <icon name="code" /> -->
          代码片段
        </button>

        <button
          class="menubar__button"
          @click="commands.horizontal_rule"
        >
          <!-- <icon name="hr" /> -->
          换行线
        </button>

        <button
          class="menubar__button"
          @click="commands.undo"
        >
          <!-- <icon name="undo" /> -->
          前进
        </button>

        <button
          class="menubar__button"
          @click="commands.redo"
        >
          <!-- <icon name="redo" /> -->
          后退
        </button>

      </div>
    </editor-menu-bar>

    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import Icon from '../components/Icon'
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'
export default {
  components: {
    EditorContent,
    EditorMenuBar,
    Icon,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of tiptap.
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>
          <h2>hhh</h2>
           <blockquote>
            喜喜
          </blockquote>
        `,
      }),
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
<style lang="scss">
@import "../assets/sass/main.scss";
</style> 