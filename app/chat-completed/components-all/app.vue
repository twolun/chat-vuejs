<script>
    import store from '../store';
	import user from './user.vue';
    import userlist from './userlist.vue';
    import dialogmessage from './dialogmessage.vue';
    import dialoginput from './dialoginput.vue';

	export default {
		el: '#chat',
        data: function(){
            let serverData = store.fetch();

            return {
                // 登录用户
                user: serverData.user,
                // 用户列表
                userList: serverData.userList,
                // 会话列表
                sessionList: serverData.sessionList,
                // 搜索key
                search: '',
                // 选中的会话Index
                sessionIndex: 0
            };
        },
        computed: {
            session: function(){
                return this.sessionList[this.sessionIndex];
            }
        },
        methods: {
            //添加发送消息
            addInputMessage: function(text){
                this.session.messages.push({
                    text: text,
                    date: new Date(),
                    self: true
                });
            },
            //改变会话列表
            updateSessionIndex: function(value){
                this.sessionIndex = this.userList.indexOf(value);
            }
        },
		components: {
			user, userlist, dialogmessage, dialoginput
		}
	}
</script>

<template>
	<div>
		<div class="sidebar">
			<user :user="user" :search.sync="search"></user>	
            <userlist :user-list="userList" :session="session" @update-session-index="updateSessionIndex" :search="search"></userlist>
		</div>
        <div class="main">
            <dialogmessage :session="session" :user="user" :user-list="userList"></dialogmessage>
            <dialoginput @add-message="addInputMessage"></dialoginput>
        </div>
	</div>
</template>

<style lang="less">
#chat {
    overflow: hidden;
    border-radius: 3px;
    
    .sidebar, .main {
        height: 100%;   
    }
    .sidebar {
        float: left;
        width: 200px;
        color: #f4f4f4;
        background-color: #2e3238;
    }
    .main {
        position: relative;
        overflow: hidden;   
        background-color: #eee;
    }
    .m-text {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }
    .m-message {
        height: ~'calc(100% - 160px)';
    }
}
</style>