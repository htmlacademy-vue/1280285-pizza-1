<template>
    <ItemCounter :calcPrice="calcPrice" :pizzaName="pizzaName" :ingObj="ingObj" @pushToCart="pushToCart"/>
</template>

<script>
import ItemCounter from "@/common/components/ItemCounter"
export default {
    name: "BuilderPrice",
    components: {
        ItemCounter
    },
    props: ["calcPrice", "pizzaName", "ingObj"],
    methods: {
        pushToCart(finalPrice) {
            this.$emit("pushToCart", finalPrice);
        }
    }
}
</script>