jQuery(document).ready(function($) {
	"use strict";

jQuery(document).on('click', '.woofood-tabs-menu a', function(e){
  var tab  = jQuery(this),
      tabPanel = jQuery(this).closest('.woofood-tabs-menu'),
      selected_tab = jQuery(this).attr("target"),
      tabPane = jQuery(selected_tab);
      tabPanel.find('.active').removeClass('active');
    jQuery('.woofood-tabs-menu').parent().find('.active').removeClass('show active');

  tab.addClass('active');

  tabPane.addClass('show active');
  return false;
});
});


  jQuery(document).on('click', '.woofood-tabs-menu a', function(e){
  var tab  = jQuery(this),
      tabPanel = jQuery(this).closest('.woofood-tabs-menu'),
      selected_tab = jQuery(this).attr("target"),
      tabPane = jQuery(selected_tab);
      tabPanel.find('.active').removeClass('active');
    jQuery('.woofood-tabs-menu').parent().find('.active').removeClass('show active');

  tab.addClass('active');

  tabPane.addClass('show active');
  return false;
});



