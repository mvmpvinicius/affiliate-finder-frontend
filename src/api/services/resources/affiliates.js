/**
 * ```
 * @prettier
 * ```
 */

import axios from "@/plugins/axios.js";

const apiUrl = process.env.VUE_APP_API_URL;

const AffiliatesService = {
  /**
   * It returns affiliates within 100km range
   *
   * @returns {Promise} Affiliates promise
   */
  getAffiliatesInRange() {
    return axios.get(`${apiUrl}affiliates`).then((response) => {
      return response.data;
    });
  },
};

export default AffiliatesService;
