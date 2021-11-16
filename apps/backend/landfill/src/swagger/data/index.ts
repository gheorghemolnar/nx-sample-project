export const landfillPost = {
  landfill_name: 'test name',
  landfill_phone_number: '+33712345612',
  landfill_contact: [
    {
      firstname: 'Phelippe',
      lastname: 'Daquino',
      email: 'pdaquino@myorg.fr',
      phone_number: '+330000000',
    },
  ],
  landfill_opening_time: {
    monday: {
      morning_open: '10:00',
      morning_close: null,
      afternoon_open: null,
      afternoon_close: '18:00',
    },
    tuesday: {
      morning_open: '10:00',
      morning_close: null,
      afternoon_open: null,
      afternoon_close: '19:00',
    },
    wednesday: {
      morning_open: '10:00',
      morning_close: '13:00',
      afternoon_open: '14:00',
      afternoon_close: '19:00',
    },
    thursday: {
      morning_open: '10:00',
      morning_close: '13:00',
      afternoon_open: '14:00',
      afternoon_close: '18:00',
    },
    friday: {
      morning_open: '10:00',
      morning_close: '13:00',
      afternoon_open: '14:00',
      afternoon_close: '18:00',
    },
    saturday: {
      morning_open: '10:00',
      morning_close: '13:00',
      afternoon_open: '14:00',
      afternoon_close: '18:00',
    },
    sunday: {
      morning_open: '10:00',
      morning_close: '13:00',
      afternoon_open: '14:00',
      afternoon_close: '18:00',
    },
  },
  landfill_address: [
    {
      address_coordinates: [2.316223, 48.872854],
      address_label: '1 Rue du Colisée 75008 Paris',
      address_housenumber: '1',
      address_name: '1 Rue du Colisée',
      address_postcode: '75008',
      address_citycode: '75108',
      address_city: 'Paris',
      address_district: 'Paris 8e Arrondissement',
      address_context: '75, Paris, Île-de-France',
      address_type: 'housenumber',
      address_street: 'Rue du Colisée',
    },
  ],
  landfill_trash_details: [
    {
      price: 100,
      type: 'WOOD',
    },
  ],
};

export const landfillPatch = {
  landfill_name: 'new test name',
  landfill_phone_number: '+33722345566',
  landfill_contact: [
    {
      firstname: 'Alexander',
      lastname: 'Daquino',
      email: 'adaquino@myorg.fr',
      phone_number: '+33111111122',
    },
  ],
};

export const landfillPatchAuthAdd = {
    user_id: ['user-id-01'],
    company_id: ['company-id-01'],
    group: ['group-01'],
};

export const landfillPatchAuthRemove = {
    group: ['group-01'],
};
