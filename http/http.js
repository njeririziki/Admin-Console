import axios from '@/utils/Api'

// This is the standard query function for the database


 export const query=(filters)=>{
    
        let params;
        try {
            params = Object.keys(filters);
        } catch (error) {
            alert(error);
            params = [];
        }
    
        return params.length
            ? '?' + params.map((x) => `${encodeURIComponent(x)}=${encodeURIComponent(filters[x] || '')}`).join('&')
            : '';
    };




