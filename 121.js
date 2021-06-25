function validate_form ( )
{
    valid = true;
    if ( document.contact_form.contact_name.value === "" )
    {
        alert ( "Пожалуйста, введите данные в поле 'Ваше имя'." );
        valid = false;
    }
    if ( ( document.contact_form.gender[0].checked === false ) && ( document.contact_form.gender[1].checked === false ) )
    {
        alert ( "Пожалуйста, выберите Ваш пол: Мужской или Женский" );
        valid = false;
    }
    if ( document.contact_form.age.selectedIndex === 0 )
    {
        alert ( "Пожалуйста, выберите Ваш возраст." );
        valid = false;
    }
    if ( document.contact_form.terms.checked === false )
    {
        alert ( "Пожалуйста, отметь согласие с Соглашением." );
        valid = false;
    }

    return valid;
}
