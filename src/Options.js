define(['settings', 'util', 'nodes'], function( settings, util, nodes ) {
  'use strict';

  function Options( level ) {
    var self = this;

    util.addEvent( nodes.optionsToggle, 'click', self.toggleOptions, false, self );
    util.addEvent( nodes.themeSelect, 'click', self.updateTheme, false, self );
    util.addEvent( nodes.togglePointsScreen, 'click', self.togglePointsScreen, false, self );

    this.populateThemeSelect();
    this.setTogglePointsLabel();

    this.level = level;
    this.optionsState = false;
  }

  Options.prototype = {};
  Options.prototype.constructor = Options;


  //
  // populate the theme select dropdown
  //
  Options.prototype.populateThemeSelect = function() {
    var theme;
    var attrs;
    var option;

    for ( theme in settings.colourThemes ) {

      attrs = [{ 'value': settings.colourThemes[theme] }];

      // the default theme is inititally selected
      if ( theme === settings.defaultTheme ) {
        attrs.push( { 'selected': true } );
      } 

      option = util.elt( 'option', null, attrs, theme );

      util.append( nodes.themeSelect, option );
    }

    this.updateTheme();
  };


  //
  // change the colour scheme of the game
  //
  Options.prototype.updateTheme = function( e ) {
    var themeClass = e ? e.target.value : settings.colourThemes[settings.defaultTheme];

    util.removeClass( nodes.body, null, true );
    util.addClass( nodes.body, themeClass );
  };


  //
  // toggle options view
  //
  Options.prototype.toggleOptions = function( e ) {
    e.preventDefault();
    e.stopPropagation();

    this.optionsState = util.toggleClass( nodes.options, 'opened' );
  };


  //
  // close options view
  //
  Options.prototype.closeOptions = function() {
    if ( this.optionsState ) {
      util.removeClass( nodes.options, 'opened' );
    }
  };


  //
  // set toggle points screen label
  //
  Options.prototype.setTogglePointsLabel = function() {
    var label = settings.showPointsScreen ? settings.togglePointsLabel.hide : settings.togglePointsLabel.show;

    util.text( nodes.togglePointsLabel, label, true ); 
  };


  //
  // toggle points screen
  //
  Options.prototype.togglePointsScreen = function() {
    settings.showPointsScreen = !settings.showPointsScreen;
    this.setTogglePointsLabel();
  };


  return Options;
});