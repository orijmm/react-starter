export const validatePhone = ( phone ) => {
    let re = /([0-9])(\d{3})(\d{4})$/;
    return re.test(phone);
}