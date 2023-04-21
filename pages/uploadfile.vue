<template>
    <section>
        <label for=""></label>
        <input type="file" @change="uploadFile" />
    </section>
</template>
<script>
export default {
    data() {
        return {
            fileUrl: '',
            fileType: ''
        }
    },
    mounted() {
        this.fetchFile();
		console.log(this.$auth)
    },
    methods: {
        fetchFile() {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:5000/api/uploadFile/1', true);
            xhr.responseType = 'blob';

            xhr.onload = () => {
                if (xhr.status === 200) {
                    const blobUrl = URL.createObjectURL(xhr.response);
                    const img = document.createElement('img');
                    img.src = blobUrl;
                    document.body.appendChild(img);
                }
            };

            xhr.send();
        }
    }
}
</script>