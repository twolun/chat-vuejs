<script type="text/javascript">
	export default {
        props: ['userList', 'session', 'search'],
        methods: {
            select (value) {
                //还是要向上冒泡事件，在父组件中改变其值 
                this.$dispatch('update-session-index', value)
            }
        },
        //自定义过滤器
		filters: {
            search: function(list){
                return list.filter(item => item.name.indexOf(this.search) > -1);
            }
        }
        
    };
</script>

<template>
    <div class="m-list">
        <ul>
            <li v-for="item in userList | search" :class="{ active: session.userId === item.id }" @click="select(item)">
                <img class="avatar"  width="30" height="30" :alt="item.name" :src="item.img">
                <p class="name">{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>

<style lang="less">
    .m-list {
        li {
            padding: 12px 15px;
            border-bottom: 1px solid #292C33;
            cursor: pointer;
            transition: background-color .1s;
            
            &:hover {
                background-color: rgba(255, 255, 255, 0.03);
            }
            &.active {
                background-color: rgba(255, 255, 255, 0.2);
            }
        }
        .avatar, .name {
            vertical-align: middle;
        }
        .avatar {
            border-radius: 2px;
        }
        .name {
            display: inline-block;
            margin: 0 0 0 15px;
        }
    }
</style>