    module.exports = function(grunt) {
     
        // Project configuration.
        grunt.initConfig({
     
            pkg: grunt.file.readJSON('package.json'),
     
            docular: {
                groups: [{groupTitle: 'LoopBack', 
			  groupId: 'loopback',
			 sections: [
				{
					id: 'lbServices',
					title: 'LoopBack Services',
					scripts: [ 'client/js/lb-services.js']
				}
			 ]
			}],
                showDocularDocs: true,
                showAngularDocs: true
            },
	    docularserver: {
		targetDir: "docular_generated"
	    }
     
        });
     
        // Load the plugin that provides the "docular" tasks.
        grunt.loadNpmTasks('grunt-docular');
     
        // Default task(s).
        grunt.registerTask('default', ['docular']);
     
    };
