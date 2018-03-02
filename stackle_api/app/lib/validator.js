/**
 * pass the input from app
 * @param { Object } input 
 */
function Validator(input) {
  this.input = input;
};


Validator.prototype.validateAddingPost = function() {
  if (!this.input) { throw new Error('Input is undefined'); }

  if (!Object.keys(this.input).length) { throw new Error('Empty Object has been passed'); }

  if (!!!~Object.keys(this.input).indexOf('title')) { throw new Error('Attribute title is missing'); }

  if (!!!~Object.keys(this.input).indexOf('description')) { throw new Error('Attribute description is missing'); }

  if (!!!~Object.keys(this.input).indexOf('repository')) { throw new Error('Attribute repository is missing'); }

  if (!!!~Object.keys(this.input).indexOf('org_name')) { throw new Error('Attribute org_name is missing'); }

  if (!!!~Object.keys(this.input).indexOf('tags')) { throw new Error('Attribute tags is missing'); }

  if (!!!~Object.keys(this.input).indexOf('link_issue')) { throw new Error('Attribute link_issue is missing'); }

  if (!!!~Object.keys(this.input).indexOf('user')) { throw new Error('Attribute user is missing'); }

  if (!!!~Object.keys(this.input).indexOf('date')) { throw new Error('Attribute date is missing'); }

  if (!!!~Object.keys(this.input).indexOf('votes')) { throw new Error('Attribute votes is missing'); }

  if (!!!~Object.keys(this.input).indexOf('comments')) { throw new Error('Attribute comments is missing'); }

  return this.input;
};


Validator.prototype.validateGetPost = function() {
  if (!this.input) { throw new Error('Input is undefined'); }

  if (!Object.keys(this.input).length) { throw new Error('Empty Object has been passed'); }

  if (!!!~Object.keys(this.input).indexOf('postId')) { throw new Error('Attribute postId is missing'); }

  return this.input;
};

Validator.prototype.validateDeletePost = function() {
  if (!this.input) { throw new Error('Input is undefined'); }

  if (!Object.keys(this.input).length) { throw new Error('Empty Object has been passed'); }

  if (!!!~Object.keys(this.input).indexOf('postId')) { throw new Error('Attribute postId is missing'); }

  return this.input;
};

Validator.prototype.validatePostsByUser = function() {
  if (!this.input) { throw new Error('Input is undefined'); }

  if (!Object.keys(this.input).length) { throw new Error('Empty Object has been passed'); }

  if (!!!~Object.keys(this.input).indexOf('user')) { throw new Error('Attribute user is missing'); }

  return this.input;
};

Validator.prototype.validatePostToOrganisation = function() {
  if (!this.input) { throw new Error('Input is undefined'); }

  if (!Object.keys(this.input).length) { throw new Error('Empty Object has been passed'); }

  if (!!!~Object.keys(this.input).indexOf('organisationName')) { throw new Error('Attribute organisationName is missing'); }

  return this.input;
};

Validator.prototype.validateGetOrganisationDetails = function() {
  if (!this.input) { throw new Error('Input is undefined'); }

  if (!Object.keys(this.input).length) { throw new Error('Empty Object has been passed'); }

  if (!!!~Object.keys(this.input).indexOf('organisationName')) { throw new Error('Attribute organisationName is missing'); }

  return this.input;
};

Validator.prototype.validateCommentOnPost = function() {
  if (!this.input) { throw new Error('Input is undefined'); }

  if (!Object.keys(this.input).length) { throw new Error('Empty Object has been passed'); }

  if (!!!~Object.keys(this.input).indexOf('postId')) { throw new Error('Attribute postId is missing'); }

  return this.input;
};

module.exports.Validator = Validator;