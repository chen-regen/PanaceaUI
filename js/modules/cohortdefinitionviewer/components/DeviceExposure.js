define(['knockout', 'cohortbuilder/options', 'cohortbuilder/InputTypes/Range', 'cohortbuilder/InputTypes/Text', 'text!./DeviceExposureTemplate.html'], function (ko, options, Range, Text, template) {

	function DeviceExposureViewModel(params) {
		var self = this;

		self.expression = params.expression;
		self.Criteria = params.criteria.DeviceExposure;
		self.options = options;

		self.getCodesetName = function(codesetId, defaultName) {
			if (codesetId != null)
			{
				var selectedConceptSet = self.expression.ConceptSets().filter(function (item) { return item.id == codesetId })[0];
				return ko.utils.unwrapObservable(selectedConceptSet.name);
			}
			else
				return defaultName;
		};
		
	}

	// return compoonent definition
	return {
		viewModel: DeviceExposureViewModel,
		template: template
	};
});