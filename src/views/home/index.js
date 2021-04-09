/**
 * ```
 * @prettier
 * ```
 */

/**
 * Components
 */
import AffiliatesList from "@/components/affiliates-list-component/AffiliatesListComponent.vue";

/**
 * Services
 */
import AffiliatesService from "@/api/services/resources/affiliates.js";

export default {
  name: "HomeView",

  components: {
    AffiliatesList,
  },

  data() {
    return {
      affiliates: null,
    };
  },

  created() {
    AffiliatesService.getAffiliatesInRange().then((response) => {
      this.affiliates = Object.values(response.data);
    });
  },
};
