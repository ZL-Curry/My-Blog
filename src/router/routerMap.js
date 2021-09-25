export default [
  {
    path: '',
    name: 'home',
    component: () => import('../views/home/'),
    meta:{
      keepAlive:true
    }
  },
  {
    path: 'text2',
    name: 'home',
    component: () => import('../views/ht/text2'),
    meta:{
      keepAlive:true
    }
  },
  {
    path: 'noteDetail',
    name: 'noteDetail',
    component: () => import('@/components/icc_note_detail.vue'),
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: () => import('../views/nav/'),
    meta: {
      title: 'navigation'
    }
  },
  {
    path: '/note',
    name: 'note',
    component: () => import('../views/note/note.vue'),
    meta: {
      title: '笔记',
      keepAlive:true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About/'),
    meta: {
      title: 'about'
    }
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import('../components/icc_loading'),
    meta: {
      title: 'loading'
    }
  },
]