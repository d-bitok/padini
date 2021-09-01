<template>
    <header class="flex">
        <div class="branding flex">
            <img src="@/assets/invoice.png" alt="">
        </div>
    </header>
</template>

<script>
export default {
    name: "navigation",
};
</script>

<style lang="scss" scoped>
header {
    z-index: 99;
    flex-direction: row;
    background-color: #1e2139;
    @media (min-width: 900px) {
        min-height: 100%;
        min-width: 90px;
        flex-direction: column;
        border-radius: 24px 24px 24px 24px;
    }

    .branding {
        border-radius: 24px 24px 24px 24px;
        background-color: #7c5dfa;
        justify-content: center;
        margin-left: 10px;
        margin-top: 10px;
        padding: 24px;
        @media (min-width: 900px) {
            width: 100%;
        }

        img {
            width: auto;
            height: 50px;
        }
    }
}
</style>
