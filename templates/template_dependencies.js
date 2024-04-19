/** Describes the dependencies for each library-specific template
 * THE OBJECT NAME MUST BE THE SAME AS THE FOLDER NAME
 * Feel free to change this but keep a copy of your changes since
 * they will be overwritten when uibuilder is updated.
 * If changed, restart Node-RED and reload the Editor.
 */
'use strict'

module.exports = {
    // Do not remove this one, it is the default and expected to be there
    blank: {
        'name': 'Blank template, no framework',
        'folder': 'blank',
        'dependencies': [],
        'description': 'Default blank template. As of v6, uses the iife client.'
    },
    'ews-ui': {
        'name': 'EWS UI',
        'folder': 'ews-ui',
        'dependencies': [],
        'description': 'EWS user interface to interact with the senors'
    },
    // DO NOT REMOVE THIS ONE OR YOU WILL NOT BE ABLE TO LOAD EXTERNAL TEMPLATES
    external: {
        'name': 'Load an external template using Degit',
        'folder': 'external',
        'dependencies': [],
        'description': 'Use this to load a template from GitHub or elsewhere. See https://github.com/Rich-Harris/degit for details. Example name: totallyinformation/uib-template-test'
    },
}
