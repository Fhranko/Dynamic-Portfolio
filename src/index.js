import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import './js/config'
import styles from './scss/main.scss'

import tplHome from './html/home.tpl.html'
import tplAbout from './html/about.tpl.html'
import tplContact from './html/contact.tpl.html'
import tplAdmin from './html/admin.tpl.html'
import tplAdminAuth from './html/admin_auth.tpl.html'

const d = document,
    main = d.querySelector('.Main'),
    footerYear = d.querySelector('.Footer-year')

    footerYear.textContent = new Date().getFullYear()

d.addEventListener('DOMContentLoaded', e =>{
    main.innerHTML = tplHome
})