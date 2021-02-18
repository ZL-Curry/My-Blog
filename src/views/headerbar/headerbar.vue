<template>
  <div class="navbar">
		<div class="navcontent">
			<div class="babalu">
				<p>巴巴鲁</p>
			</div>
			<div class="nav-items" :class="status?'nav-itemshow':''">
				<div class="nav-item" @click="navTo('/')">首页</div>
				<div class="nav-item" @click="navTo('/blog')">博客</div>
				<div class="nav-item" @click="navTo('/note')">笔记</div>
				<div class="nav-item" @click="navTo('/about')">关于</div>
			</div>
			<button type="button" class="nav-btn" id="nav-btn" @click="status= !status">
				<!--按钮-->
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>

	</div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      status:true
    }
  },
  computed: {},
  watch: {},
  created () {
  
  },
  mounted () {},
  methods: {
   toggleBtn(){
     this.status = !this.status
   }
  }
}
</script>

<style scoped>
.navbar {
			height: 60px;
			width: 100%;
			background-color: #eee;
			border-bottom: 1px solid #ccc;
			box-shadow: 0px 2px 10px #ccc;
		}

		.navcontent {
			width: 100%;
			padding: 0 10%;
			display: flex;
			box-sizing: border-box;
			justify-content: space-between;
			align-items: center;
		}

		.babalu {
			display: flex;
			justify-content: center;
			line-height: 60px;
		}

		.babalu p {
			font-size: 20px;
			letter-spacing: 2px;
			font-weight: bolder;
		}

		.nav-items {
			height: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
			z-index: 999;
		}

		.nav-item {
			height: 100%;
			font-weight: 500;
			line-height: 60px;
			text-align: center;
			width: 100px;
			background: #eee;
		}

		.nav-item:hover {
			background-color: rgb(202, 201, 200);
			font-weight: bold;
			text-shadow: 1px 1px 2px rgb(131, 131, 131);
			transition: all 0.5s;
		}

		.nav-btn {
			display: none;
			position: absolute;
			top: 19px;
			right: 19px;
			z-index: 99999;
			padding: 5px 5px 3px;
			cursor: pointer;

		}

		.nav-btn span {
			display: block;
			width: 17px;
			height: 2px;
			background: rgb(119, 119, 119);
			margin-bottom: 2px;
		}

		@media all and (max-width:768px) {
			.navbar {
				width: 100%;
			}

			.navcontent {
				padding: 0;
				display: block;
				box-sizing: content-box;
				align-items: center;
			}

			.babalu {
				display: flex;
				justify-content: start;
				padding-left: 2%;
			}

			.nav-items {
				width: 100%;
				z-index: 999;
				display: flex;
				flex-wrap: wrap;
				display: none;
				opacity:1;
			}
      .nav-items.nav-itemshow{
        display: block;
      }

			.nav-item {
				width: 100%;
				display: flex;
				justify-content: start;
				padding-left: 2%;
				border-bottom: 1px solid #ccc;
				z-index: 999;
			}

			.nav-btn {
				display: block;
			}
		}
</style>
