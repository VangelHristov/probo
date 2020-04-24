'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">probo-ui documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-580909b8c4b4add421b9efbcbe5786c4"' : 'data-target="#xs-components-links-module-AppModule-580909b8c4b4add421b9efbcbe5786c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-580909b8c4b4add421b9efbcbe5786c4"' :
                                            'id="xs-components-links-module-AppModule-580909b8c4b4add421b9efbcbe5786c4"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-1977239119cecf901632b265ba02fc18"' : 'data-target="#xs-components-links-module-AuthModule-1977239119cecf901632b265ba02fc18"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-1977239119cecf901632b265ba02fc18"' :
                                            'id="xs-components-links-module-AuthModule-1977239119cecf901632b265ba02fc18"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegistrationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MainModule.html" data-type="entity-link">MainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainModule-54115ae80b726e42c43ade523851574a"' : 'data-target="#xs-components-links-module-MainModule-54115ae80b726e42c43ade523851574a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainModule-54115ae80b726e42c43ade523851574a"' :
                                            'id="xs-components-links-module-MainModule-54115ae80b726e42c43ade523851574a"' }>
                                            <li class="link">
                                                <a href="components/ContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainRoutingModule.html" data-type="entity-link">MainRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProblemsModule.html" data-type="entity-link">ProblemsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProblemsModule-4042e3676df815fb2e92d01a69b554bc"' : 'data-target="#xs-components-links-module-ProblemsModule-4042e3676df815fb2e92d01a69b554bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProblemsModule-4042e3676df815fb2e92d01a69b554bc"' :
                                            'id="xs-components-links-module-ProblemsModule-4042e3676df815fb2e92d01a69b554bc"' }>
                                            <li class="link">
                                                <a href="components/ProblemDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProblemDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProblemFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProblemFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProblemListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProblemListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-ProblemsModule-4042e3676df815fb2e92d01a69b554bc"' : 'data-target="#xs-pipes-links-module-ProblemsModule-4042e3676df815fb2e92d01a69b554bc"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ProblemsModule-4042e3676df815fb2e92d01a69b554bc"' :
                                            'id="xs-pipes-links-module-ProblemsModule-4042e3676df815fb2e92d01a69b554bc"' }>
                                            <li class="link">
                                                <a href="pipes/EnumPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EnumPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TruncatePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TruncatePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProblemsRoutingModule.html" data-type="entity-link">ProblemsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestCasesModule.html" data-type="entity-link">TestCasesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestCasesModule-f14698aa386a15f75e3ffe5639d5802e"' : 'data-target="#xs-components-links-module-TestCasesModule-f14698aa386a15f75e3ffe5639d5802e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestCasesModule-f14698aa386a15f75e3ffe5639d5802e"' :
                                            'id="xs-components-links-module-TestCasesModule-f14698aa386a15f75e3ffe5639d5802e"' }>
                                            <li class="link">
                                                <a href="components/FunctionFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FunctionFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ParameterFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParameterFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ParameterListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParameterListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SampleFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SampleFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestCaseFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestCaseFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestCaseHubComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestCaseHubComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestCaseListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestCaseListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestCasesRoutingModule.html" data-type="entity-link">TestCasesRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FunctionDataService.html" data-type="entity-link">FunctionDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ParameterDataService.html" data-type="entity-link">ParameterDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProblemDataService.html" data-type="entity-link">ProblemDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SampleDataService.html" data-type="entity-link">SampleDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TestCaseDataService.html" data-type="entity-link">TestCaseDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserDataService.html" data-type="entity-link">UserDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationService.html" data-type="entity-link">ValidationService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthorizationHeaderInterceptor.html" data-type="entity-link">AuthorizationHeaderInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/MainRoutesGuard.html" data-type="entity-link">MainRoutesGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ProblemDataResolver.html" data-type="entity-link">ProblemDataResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/TestCaseResolver.html" data-type="entity-link">TestCaseResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/TestCasesByProblemResolver.html" data-type="entity-link">TestCasesByProblemResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AccountModel.html" data-type="entity-link">AccountModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiResponseModel.html" data-type="entity-link">ApiResponseModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthResponseModel.html" data-type="entity-link">AuthResponseModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CredentialsModel.html" data-type="entity-link">CredentialsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FunctionModel.html" data-type="entity-link">FunctionModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Parameter.html" data-type="entity-link">Parameter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Problem.html" data-type="entity-link">Problem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sample.html" data-type="entity-link">Sample</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TestCase.html" data-type="entity-link">TestCase</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});