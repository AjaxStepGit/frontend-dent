import { gql } from "@apollo/client";

const GET_COUNTRY_AND_STATE = gql`
  query {
    countries {
      available_regions {
        code
        id
        name
      }
      full_name_english
      full_name_locale
      id
      three_letter_abbreviation
      two_letter_abbreviation
    }
  }
`;

export default GET_COUNTRY_AND_STATE;
