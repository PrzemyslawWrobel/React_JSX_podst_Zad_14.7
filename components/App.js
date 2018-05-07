var contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
    foto: 'jan.jpg'
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
    foto: 'Adam.jpg'
  },
  {
    id: 3,
    firstName: 'Dziadek',
    lastName: 'Mróz',
    email: 'dziadek_mroz@example.com',
    foto: 'dziadek_mróz.jpg'
  },
  {
    id:4,
    firstName: 'Aga',
    lastName: 'Kolo',
    email: 'Aga.kolo@example.com',
    foto: 'Aga.jpg'
  },
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};


var App = React.createClass({
	render: function() {
		return (
			<div className={'app'}>
				<ContactForm contact={contactForm}> </ContactForm>
				<Contacts items={contacts}><Contacts/>
			</div>
		);
	}
});


