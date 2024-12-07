


const scriptsInEvents = {

	async ["Event-Blatt1_Event25"](runtime, localVars)
	{
		ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
		        if( command === "stein" ) {
		          console.log( "Stein fällt!" );
				  
		        }
		      }
		      ComfyJS.Init( "speetzen" );
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

