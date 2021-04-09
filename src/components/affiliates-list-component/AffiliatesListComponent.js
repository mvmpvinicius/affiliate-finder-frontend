/**
 * ```
 * @prettier
 * ```
 */

export default {
  name: "AffiliatesList",

  props: {
    affiliates: {
      type: Array,
      default: () => {
        return {};
      },
    },
  },

  data() {
    return {
      fields: [
        "affiliate_id",
        "name",
        {
          key: "distance",
          formatter: (value) => {
            return value.toFixed(2) + " KM";
          },
        },
        "latitude",
        "longitude",
      ],
    };
  },
};
