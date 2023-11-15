
import {createRouter, createWebHistory} from "vue-router";


//라우터 설계
const routes = [
    {
        name : "home",
        path:'/',
        component: () => import("@/views/Login.vue")
    },
    {
        name: "about",
        path:'/about',
        component: () => import("@/views/About.vue"),
    },
    {
        name:"board",
        path:'/board',
        component: () => import("@/views/Board.vue")
    },
    {
        name:"boardRegistration",
        path:'/board/registration',
        component: () => import("@/views/BoardRegistration.vue")
    },
]

//라우터 생성
const router = createRouter({
    history:createWebHistory(),
    routes
});

//라우터 추출
export default router;
