namespace testmanagement;

using {managed,Currency} from '@sap/cds/common';
using from '@sap/cds-common-content';
using {  API_BUSINESS_PARTNER as bupa } from '../srv/external/API_BUSINESS_PARTNER';



entity Tests:managed{
 key testId:UUID;
 questions:Association to many Questions on questions.test=$self;
 title:String;
 description:String;
 price:Integer;
 currency:Currency;
 supplier:Association to Suppliers;
 review:Association to Reviews on review.reviews=$self;
 assignedquestion:Boolean default false;
}
entity Suppliers as projection on bupa.A_BusinessPartner {
        key BusinessPartner as ID,
        BusinessPartnerFullName as fullName,
        BusinessPartnerIsBlocked as isBlocked,
}
entity Questions{
 key questionId:String;
test:Association to one Tests;
text:String;
answers:Composition of one Answers; 
}
entity Reviews{
        reviews:Association to Tests;
        rating:Integer;
        reviewtext:String
 }
aspect Answers{
   key answerId:String;
    text:String;
    questions:Composition of one Questions;
}