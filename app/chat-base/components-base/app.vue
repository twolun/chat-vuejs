<script>
    import store from '../store';
	import user from './user.vue';
    import userlist from './userlist.vue';
    import dialogmessage from './dialogmessage.vue';
    import dialoginput from './dialoginput.vue';

	export default {
		el: '#chat',
		components: {
			user, 
            userlist, dialogmessage, dialoginput
		}
	}
</script>

<template>
	<div>
		<div class="sidebar">
			<user></user>	
            <userlist></userlist>
		</div>
        <div class="main">
            <dialogmessage></dialogmessage>
            <dialoginput></dialoginput>
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