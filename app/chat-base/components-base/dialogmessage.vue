<script>
    export default {
        data: function(){
            return {
                session: {
                    userId: 2,
                    messages: [
                        {
                            text: 'Hello，这是一个基于Vue + Webpack构建的简单chat示例，聊天记录保存在localStorge。简单演示了Vue的基础特性和webpack配置。',
                            date: new Date(),
                            img: 'dist/images/2.png'
                        }, 
                        {
                            text: '项目地址: https://github.com/coffcer/vue-chat',
                            date: new Date(),
                            img: 'dist/images/2.png'
                        },
                        {
                            text: 'Hello，ebpack配置。',
                            date: new Date(),
                            img: 'dist/images/1.jpg',
                            self: true
                        }, 
                        {
                            text: '项目地址: https://github.com/coffcer/vue-chat',
                            date: new Date(),
                            img: 'dist/images/1.jpg',
                            self: true
                        }
                    ]
                }
            }
        }
    }
</script>

<template>
    <div class="m-message">
        <ul>
            <li v-for="item in session.messages">
                <p class="time"><span>{{item.date}}</span></p>
                <div class="main" :class="{ self: item.self }">
                    <img class="avatar" width="30" height="30" :src="item.img" />
                    <div class="text">{{item.text}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="less">
    .m-message {
        padding: 10px 15px;
        overflow-y: scroll;
        
        li {
            margin-bottom: 15px;
        }
        .time {
            margin: 7px 0;
            text-align: center;
            
            > span {
                display: inline-block;
                padding: 0 18px;
                font-size: 12px;
                color: #fff;
                border-radius: 2px;
                background-color: #dcdcdc;
            }
        }
        .avatar {
            float: left;
            margin: 0 10px 0 0;
            border-radius: 3px;
        }
        .text {
            display: inline-block;
            position: relative;
            padding: 0 10px;
            max-width: ~'calc(100% - 40px)';
            min-height: 30px;
            line-height: 2.5;
            font-size: 12px;
            text-align: left;
            word-break: break-all;
            background-color: #fafafa;
            border-radius: 4px;
            
            &:before {
                content: " ";
                position: absolute;
                top: 9px;
                right: 100%;
                border: 6px solid transparent;
                border-right-color: #fafafa;
            }
        }
        
        .self {
            text-align: right;
            
            .avatar {
                float: right;
                margin: 0 0 0 10px;
            }
            .text {
                background-color: #b2e281;
                
                &:before {
                    right: inherit;
                    left: 100%;
                    border-right-color: transparent;
                    border-left-color: #b2e281;
                }
            }
        }
    }
</style>