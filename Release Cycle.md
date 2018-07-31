# Release Cycle
Imagine core apps are released to Production on a Bi-weekly basis on **Wednesdays**. In the interspersing weeks, safe code is updated in our Release Candidate version. This allows the code to be tested by interested parties prior to it being deployed to production.

This pattern is subject to change. Over holiday periods we may bypass the whole Bi-weekly block. We will not swap between our Odd RC and Even production pattern though.

Data is not shared between Release Candidate and Production. Therefore, logins for your system will not work in Release Candidate unless you have been given access to a Release Candidate system by prior arrangement.

To request access, email imagine@k3imagine.com and we can create you a Release Candidate tenant.

## Release Candidate
We only promote code to Release Candidate when it has been thoroughly tested and QAed internally. By having a Release Candidate version we can double check all code works as expected, give our users an opportunity to UAT the changes. We can also fix any issues which arise in Release Candidate.

No new features will be added to Release Candidate once it has been updated, only bugfixes.

Release Candidate is updated on "odd" week numbers. Commencing on Wednesday 1st August 2018, which is Week 31.

On this daywe update our release notes here: https://github.com/K3Imagine/PublicDocumentation/blob/master/Release%20Notes.md with any changes which have been made in the relevant areas of interest.

We also email a mailing list with these release notes. If you wish to be added to this mailing list, please email imagine@k3btg.com

## Production
We release to Production provided the Release Candidate does not highlight any blocking issues we have been unable to resolve. Production becomes identical to the software running in Release Candidate - there is no disparity until the subsequent odd week.

Production is updated on "even" week numbers. Commencing on Wednesday 8th August 2018, which is Week 32.

On this day we update our release notes here: https://github.com/K3Imagine/PublicDocumentation/blob/master/Release%20Notes.md, switching the Release Candiate notes to Production.

We also email a mailing list with these release notes. If you wish to be added to this mailing list, please email imagine@k3btg.com
