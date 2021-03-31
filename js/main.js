/* global data */
/* exported data */

var $photoUrl = document.querySelector('#photo_url');
var $photo = document.querySelector('#photo');

$photoUrl.addEventListener('input', updatePhotoUrl);

function updatePhotoUrl(event) {
  $photo.setAttribute('src', event.target.value);
}

var $formElement = document.querySelector('.form-element');

$formElement.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();

  var inputObj = {
    title: $formElement.elements['title-name'].value,
    photoURL: $formElement.elements['photo-url'].value,
    notes: $formElement.elements['notes-section'].value,
    entryId: data.nextEntryId++
  };

  data.entries.unshift(inputObj);

  $formElement.reset();

  $photo.setAttribute('src', 'images/placeholder-image-square.jpg');
}

var entriesTab = document.querySelector('a');
var entryForm = document.querySelector('.entry-form');
var entries = document.querySelector('.entries');
// console.log(entriesTab);

function handleClick(event) {
  // console.log('clicked link to entries view!', event.target.value);

  entryForm.className = 'hidden';
  entries.className = 'view';

}

entriesTab.addEventListener('click', handleClick);
