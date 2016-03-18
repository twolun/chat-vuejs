<script type="text/javascript">
	export default {
		data: function(){
			return {
				userList: [
		            {
		                id: 2,
		                name: '示例介绍',
		                img: 'dist/images/2.png'
		            },
		            {
		                id: 3,
		                name: 'webpack',
		                img: 'dist/images/3.jpg'
		            }
		        ]
			}
		},
        
    };
</script>

<template>
    <div class="m-list">
        <ul>
            <li v-for="item in userList">
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