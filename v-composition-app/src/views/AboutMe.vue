<template>
    <div class="aboutme">
        <div class="aboutme-left">
            <div class="aboutme-img"><img :src="avatar" :alt="img.alt"></div>
            <div class="aboutme-nick">{{nick}}</div>
            <div class="aboutme-social">
                <span v-for="link in links" :key="link.title">
                    {{link.title}}: 
                    <router-link to="#" >{{link.url}}</router-link>
                </span>
            </div>
        </div>
        <div class="aboutme-right">
            <div>
                <span class="aboutme-right-title">Who am i?</span>
                <p v-if="!isEdit" class="aboutme-right-descr">{{biography}}</p>
                <textarea v-else cols="30" rows="10" v-model="biography" @keydown.enter="isEdit = !isEdit"></textarea>
            </div>
            <div>
                <span class="aboutme-right-title">What can i do?</span>
                <p v-if="!isEdit" class="aboutme-right-descr">{{technologies}}</p>
                <textarea v-else cols="30" rows="10" v-model="technologies" @keydown.enter="isEdit = !isEdit"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex'
import avatar from '@/assets/avatar.jpg'

export default {
    setup() {
        const store = useStore()
        const links = store.getters.getLinks
        const biography = store.getters.getBiography
        const technologies =  store.getters.getTechologies
        const isEdit = store.getters.getIsEdit
        const img = store.getters.getImg
        const nick = store.getters.getNick

        return {
            links,
            biography,
            technologies,
            isEdit,
            img,
            avatar,
            nick
        }
    }
}
</script>

<style lang="scss">
.aboutme {
    display: flex;
    padding: 0 25%;
    justify-content: space-between;
    &-img{
        margin-top: 20px;
        img {
            width: 300px; 
            height: 300px;
        } 
    }
    &-nick {
        margin-top: 20px;
        font-size: 40px;
        font-weight: 100;
    }
    &-right {
        width: 50%;
        &-title {
            font-size: 40px;
            font-weight: 100;
        }
        &-descr {
            margin-top: 2%;
            font-size: 20px;
            font-weight: 100;
        }
        div {
            margin-top: 20px;
        }
    }
    &-social {
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        span {
            font-size: 20px;
            font-weight: 100;
            a {
                text-decoration: none;
                color: #000;
            }
        }

    }
    &-link {
        text-decoration: none;
    }
    &-right {
        width: 50%;
    }
}
</style>