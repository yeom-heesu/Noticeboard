
<script>
import { fetchMessage } from '@/services/fetchers'

export default {
    data() {
        return {
            message: ''
        }
    },
    async created() {
        try {
            this.message = await fetchMessage()
        }
        catch(error){
            this.message = 'server error :('
        }
    }
}
</script>
<template>
  <router-view/>
  {{message}}
</template>


<style lang="scss">
                  // Import Main styles for this application
@import 'styles/style';
</style>


