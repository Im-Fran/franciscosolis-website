/* Axios */
import Axios from 'axios';
import { client } from 'laravel-precognition-react-inertia';

window.axios = Axios.create()
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

client.use(window.axios)
