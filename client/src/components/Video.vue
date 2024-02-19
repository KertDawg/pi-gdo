<template>
    <img
    :src="URL"
    img-class="VideoImage"
    class="VideoImage" />
</template>

<script>

export default {
    name: "ComponentVideo",

    data()
    {
        return {};
    },

    props:
    {
        URL: String,
    },
};

</script>

<style scoped>
.VideoImage
{
    max-width: 100%;
    max-height: 70%;
}

</style>
