<script>
    export default {
        props: [],
        data () {
            return {
                text: ''
            };
        },
        methods: {
            inputing: function(e){
                if (e.ctrlKey && e.keyCode === 13 && this.text.length) {
                    // this.session.messages.push({
                    //     text: this.text,
                    //     date: new Date(),
                    //     self: true
                    // });
                    console.log('上种方法，以对象作为属性绑定，相当于双向数据绑定，这种操作会很难跟踪数据，所以使用事件冒泡的方式，在父组件中进行处理')
                    this.$dispatch('add-message', this.text);
                    this.text = '';
                }
            }
        }
    };
</script>

<template>
    <div class="m-text">
        <textarea placeholder="按 Ctrl + Enter 发送" v-model="text" @keyup="inputing"></textarea>
    </div>
</template>

<style lang="less">
    .m-text {
        height: 160px;
        border-top: solid 1px #ddd;
        
        textarea {
            padding: 10px;
            height: 100%;
            width: 100%;
            border: none;
            outline: none;
            font-family: "Micrsofot Yahei";
            resize: none;
        }
    }
</style>