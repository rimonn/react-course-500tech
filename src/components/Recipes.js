import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleRecipe } from '../actions/recipes';

import Recipe from './Recipe';

const Recipes = ({ recipes, toggle }) => (
  <ul>
    { recipes.map(recipe => <Recipe key={ recipe.id } recipe={ recipe } toggle={ toggle } /> )}
  </ul>
);

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default connect(mapStateToProps, { toggle: toggleRecipe })(Recipes);