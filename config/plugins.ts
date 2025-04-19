module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
              cloud_name: 'arevaloweb',
              api_key: '699291333499611',
              api_secret: 'qru9lRSkxTnazI4OWr_EwxBIC7k',
              secure: true,
            },
            actionOptions: {
              uploadStream: {
                folder: 'strapi',
              },
              delete: {},
            },
        },
    },
});