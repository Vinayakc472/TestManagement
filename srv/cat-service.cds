
using testmanagement from '../db/data-model.cds';

service DevChallengeService {
    @odata.draft.enabled
    entity Tests @(restrict: [
        {
            grant: [
                'READ',
                'WRITE',
                'UPDATE',
                'UPSERT',
                'DELETE'
            ], 
            to   : 'TestManager'
        }
    ])   as projection on testmanagement.Tests actions {
             @cds.odata.bindingparameter.name: '_it'
            @Common.SideEffects : {
                TargetProperties: ['_it/questions']
                }
            @Common.IsActionCritical:true
        action assignQuestionsToTest(questionsCount: Integer) returns String;
        
        action createTest @(requires: 'TestManager')(questionText: String, answerText: String) returns String;
        action addReview(text:String) returns String;
    };
    entity Questions @(restrict: [
        {
            grant: '*', // Allow everything using wildcard
            to   : 'TestManager'
        }
    ])       as projection on testmanagement.Questions;
    // @readonly
    entity Suppliers as projection on testmanagement.Suppliers;
    
}


