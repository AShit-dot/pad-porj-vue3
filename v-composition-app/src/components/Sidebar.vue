<template>
    <div class="fixed">
        <div class="sidebar" ref="sidebar">
            <div @click.prevent="() => sidebarToggle($refs.sidebar)">
                <div class="triangle"></div>
                <div class="divider"></div>
                <div class="dropdown"></div>
            </div>
            <ul class="li">
                <router-link  :key="topic.title"
                            tag="li" 
                            class="li-item" 
                            v-for="topic in topics" 
                            :to="topic.link"
                            active-class="active">
                            {{topic.title}}</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
    methods: {
        sidebarToggle (ref) {
            ref.classList.toggle('open')
        }
    },
    setup() {
        const store = useStore()
        const topics = store.getters.getTopics

        return {
            topics
        }
    }
}
</script>

<style lang="scss">
.fixed {
    display: f;
}
.active {
    background-color: #f2f0f0;
}
.open {
    transform: translateX(-100%);
}
.li {
    list-style-type: none;
    &-item {
        padding: 5%;
        display: block;
        text-align: center;
        border-bottom: 2px solid #e8e9eb;
        transition: 0.3s all;
        text-decoration:none;
        color: #98999c;
        &:hover {
            background-color: #f2f0f0;
        }
    }
}
.br-rad0 {
    border: 0px solid #e8e9eb;
    border-bottom: 2px solid #d4d4d4;
    border-bottom-right-radius: none; 
    border-bottom-left-radius: none;
}
.divider {
    cursor: pointer;
}
.sidebar {
    display: inline-block;
    position: fixed;
    top: 0;
    background-color: #fff;
    width: 240px;
    height: 100%;
    transition: 0.5s all;
    border: 2px solid #e8e9eb;
    z-index: 1;
}
.triangle {
	position: absolute;
	background-color: #e8e9eb;
	text-align: left;
    cursor: pointer;
    z-index: 1;
    border-top-right-radius: 90%;
}
.triangle:before,
.triangle:after {
	content: '';
	position: absolute;
}

.triangle,
.triangle:before,
.triangle:after {
	width:  32px;
	height: 32px;
    background-color: #d4d4d4;
}

.triangle {
	transform: rotate(30deg) skewX(-30deg) scale(1, 0.866) translate(160px, -128px);
}
.triangle:before {
	transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
}
.triangle:after {
	transform: rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%);
}

.divider {
    position: absolute;
    transform: translate(246px, 26px);
    width: 20px;
    height: 2px;
    background-color: #98999c;
    z-index: 2;
    &:before {
        content: '';
        width: 20px;
        height: 2px;
        background-color: #98999c;
        display: block;
        position: absolute;
        transform: translate(0,5px);
    }
    &:after {
        content: '';
        width: 20px;
        height: 2px;
        display: block;
        position: absolute;
        transform: translate(0,10px);
        background-color: #98999c;
    }
}

</style>