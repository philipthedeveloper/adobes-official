import adobesLogo from "@/assets/images/logo.png";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  emailRegex,
  sectionList,
  getSectionFields,
  sectionNames,
} from "@/constant";
import Ranger from "@/components/survey/Ranger";
import * as yup from "yup";
import { useFormik } from "formik";
import SectionHeader from "@/components/survey/SectionHeader";
import {
  BusinessInformation,
  BasicInformation,
  MarketingAndLeadGenerationNeeds,
  CurrentMarketingPerformance,
  DecisionMakingProcess,
  Timeline,
  ChallengesAndGoals,
  AdditionalInformation,
} from "@/components/survey/sections";
import { useRedux } from "@/hooks/useRedux";
import { resetSubmitSurvey, submitSurvey } from "@/redux";
import { Loader } from "@/components/progress";
import { showSuccessNotification } from "@/utils";
import classNames from "classnames";

type Props = {};
export const Survey = ({}: Props) => {
  const [currentRange, setCurrentRange] = useState(1);
  const shadowBoxRef = useRef<null | HTMLDivElement>(null);
  const { useStateSelector, dispatch } = useRedux();
  const [loading, setLoading] = useState(false);

  // Survey form state
  const { submittingSurvey, surveySubmitted, surveySubmissionError } =
    useStateSelector((state) => state.Survey);

  const currentSectionName = useMemo(
    () => sectionNames[currentRange - 1],
    [currentRange]
  );

  document.documentElement.style.background = "#131313";
  document.body.style.background = "#131313";

  // Default survey form data
  const defaultValues = useMemo(
    () => ({
      // Basic Information
      name: "",
      companyName: "",
      emailAddress: "",
      phoneNumber: "",
      website: "",
      // Business Information
      businessIndustry: "",
      operatingYears: "",
      companySize: "",
      // Marketing and Lead generation needs
      primaryGoals: [],
      satisfiedWithCurrentStrategy: true,
      areaOfImprovement: "",
      currentMarketingChannels: [],
      monthlyMarketingBudget: "",
      haveInhouseMarketingTeam: false,
      marketingTeamMembers: "",
      // Current marketing performance
      averageMonthlyLeadGeneration: "",
      currentConversionRate: "",
      biggestLeadGenerationChallenge: "",
      // Challenges and Goals
      biggestChallengeInMarketing: [],
      specificGoals: "",
      // Decision making process
      isDecisionMaker: true,
      otherEntitiesInvolved: "",
      // Timeline
      timeline: "",
      // Additional Information
      additionalInformation: "",
    }),
    []
  );

  // Survey form schema
  const surveyFormSchema = yup.object({
    name: yup.string().required("Please enter your name"),
    companyName: yup.string().required("Please provide company name"),
    emailAddress: yup
      .string()
      .matches(emailRegex, "Enter a valid email")
      .required("Please enter your email"),
    phoneNumber: yup.string().required("Please enter phone number"),
    website: yup
      .string()
      .required("Please provide website link")
      .matches(
        /^(https?:\/\/)?([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+\.[a-zA-Z]{2,}(:[0-9]{1,5})?(\/[^\s]*)?$/,
        "Enter a valid url"
      ),
    // Business information
    businessIndustry: yup
      .string()
      .required("Please provide your business's operating industry"),
    operatingYears: yup
      .string()
      .required("Please select business's operating years"),
    companySize: yup.string().required("Please select company size"),

    // Marketing and lead generation needs
    primaryGoals: yup
      .array()
      .of(yup.string().required("Please provide goal"))
      .min(1, "Please select at least one primary goal")
      .required(`Please select primary goals`),
    satisfiedWithCurrentStrategy: yup
      .boolean()
      .required("Please select an option"),
    areaOfImprovement: yup
      .string()
      .when("satisfiedWithCurrentStrategy", (value: any, schema: any) => {
        return value[0] === false
          ? schema.required("Please provide area of improvement")
          : schema;
      }),
    currentMarketingChannels: yup
      .array()
      .of(yup.string().required("Please select channel"))
      .min(1, "Please select at least one marketing channel")
      .required("Please select marketing channels"),
    monthlyMarketingBudget: yup
      .string()
      .required("Please select montly marketing budget"),
    haveInhouseMarketingTeam: yup.boolean().required("Please answer yes/no"),
    marketingTeamMembers: yup
      .string()
      .when("haveInhouseMarketingTeam", (value: any, schema: any) => {
        return value[0] === true
          ? schema.required("Please specify number of team members")
          : schema;
      }),

    // CURRENT MARKETING PERFORMANCE
    averageMonthlyLeadGeneration: yup
      .string()
      .required("Please specify your current market performance"),
    currentConversionRate: yup
      .string()
      .required("Please specify current conversion rate"),
    biggestLeadGenerationChallenge: yup
      .array()
      .of(yup.string().required("Please select channel"))
      .min(1, "Please select at least one lead generation challenge")
      .required("Please select lead generation chanllenges"),

    // CHALLENGES AND GOALS
    biggestChallengeInMarketing: yup
      .string()
      .required("Please fill this field"),
    specificGoals: yup.string().required("Please fill this field"),

    // DECISION MAKING PROCESS
    isDecisionMaker: yup.boolean().required("Please answer yes/no"),
    otherEntitiesInvolved: yup
      .string()
      .when("isDecisionMaker", (values, schema) => {
        return values[0] === false
          ? schema.required(
              "Please provide other entities involved in decision making"
            )
          : schema;
      }),

    // TIMELINE
    timeline: yup.string().required("Please select a timeline"),

    // ADDITIONAL INFORMATION
    additionalInformation: yup.string(),
  });

  // Initialize survey form validation
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: defaultValues,
    validationSchema: surveyFormSchema,
    onSubmit: (values) => {
      dispatch(submitSurvey(values));
    },
  });

  // Extract useful methods form validation object
  const { setFieldTouched } = validation;

  const goToPrevSection = () => {
    setLoading(true);
    setCurrentRange((currentValue) => currentValue - 1);
    setLoading(false);
  };

  const runSectionValidator = async (currentSectionIndex: number) => {
    setLoading(true);
    const sectionFields = getSectionFields(currentSectionIndex);
    if (!sectionFields) return true;

    let hasInvalidField = false;

    for (let field of sectionFields) {
      // Trigger it as touched
      const validationResult = await setFieldTouched(field, true);
      if (validationResult && field in validationResult) {
        hasInvalidField = true;
      }
    }
    return hasInvalidField;
  };

  const goToNextSection = () => {
    runSectionValidator(currentRange - 1).then((hasInvalidField: boolean) => {
      if (!hasInvalidField) {
        setCurrentRange((currentValue) => currentValue + 1);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    if (surveySubmitted) {
      showSuccessNotification("Your survey has been submitted.");
      validation.resetForm();
      setCurrentRange(1);
      dispatch(resetSubmitSurvey());
      window.location.href =
        "https://calendly.com/adutem05/marketing-consultation?month=2024-09";
    }
  }, [surveySubmitted]);

  useEffect(() => {
    if (surveySubmissionError) {
      dispatch(resetSubmitSurvey());
    }
  }, [surveySubmissionError]);

  return (
    <>
      <div className="w-full h-auto relative">
        {/* Background */}
        {/* <div className="w-[115%] md:w-full h-full top-0 right-0 absolute flex justify-end items-start z-0">
          <img
            src={pageBackground}
            alt=""
            className="w-[120%] sm:w-auto h-auto md:h-full object-contain"
          />
        </div> */}
        <div className="w-[90%] lg:w-[80%] mx-auto max-w-screen-xl h-full z-20 relative">
          {/* Header */}
          <div className="w-full md:gap-8">
            <header className="pt-4 md:pt-8 ">
              <div>
                <a
                  href="https://adutem-innovation.onrender.com/"
                  target="_blank"
                >
                  <img src={adobesLogo} className="max-h-16 md:max-h-20" />
                </a>
              </div>
            </header>
          </div>

          {/* Info */}
          <div className="h-full flex items-center mt-12">
            <div className="max-w-[800px] flex flex-col mx-auto">
              <h1
                className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[2.4rem] text-[var(--base-color)] text-center neue-regular"
                style={{ lineHeight: "1.2" }}
              >
                10X your business ROI today
              </h1>
              <p
                className="capitalize mt-5 md:text-xl text-gray-100 font-semibold max-w-[800px] text-center neue-regular"
                style={{ lineHeight: "1.5" }}
              >
                {"GET YOUR OWN TRAFFIC-GENERATION INBOUND LEAD SYSTEM & SECURE NEW PROJECTS/ClIENTS EVERY 30 DAYS OR IT'S FREE".toLowerCase()}
              </p>
              <p className="font-semibold text-xs md:text-sm text-gray-300 opacity-80 mt-6 flex item-center gap-1 text-center justify-center">
                <i className="fi fi-sr-shield-check flex"></i>
                <span className="-mt-1 neue-regular">Pay-Per-Project</span>
              </p>
              <p className="font-semibold text-xs md:text-sm text-gray-300 mt-2 flex item-center gap-1 text-center justify-center">
                <i className="fi fi-sr-shield-check flex"></i>
                <span className="-mt-1 neue-regular">
                  The #1 Way to Close New Projects during high interest rate
                  periods
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={shadowBoxRef}
        className="w-[90%] lg:w-[80%] max-w-xl mx-auto bg-[#0d0d0d] p-4 my-10 mt-12 mb-36 md:p-8 transition-all duration-300 rounded-lg"
        style={{
          boxShadow:
            "0px 4px 8px rgba(0, 0, 0, 0.10), 0px 8px 25px rgba(0, 0, 0, 0.15)",
          // height: `${visibleHeight + 16}px`,
        }}
      >
        {/* Ranger */}
        <Ranger totalRange={sectionList.length} currentRange={currentRange} />

        {/* Header */}
        <SectionHeader sectionName={currentSectionName} />

        <div className="mt-8 relative">
          {(submittingSurvey || loading) && <Loader />}
          <form
            className="relative w-full"
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            {/* Sections */}
            {/* BASIC INFORMATION */}
            <BasicInformation
              validation={validation}
              currentRange={currentRange}
            />

            {/* BUSINESS INFORMATION */}
            <BusinessInformation
              validation={validation}
              currentRange={currentRange}
            />

            {/* MARKETING AND LEAD GENERATION NEEDS */}
            <MarketingAndLeadGenerationNeeds
              validation={validation}
              currentRange={currentRange}
            />

            {/* CURRENT MARKETING PERFORMANCE */}
            <CurrentMarketingPerformance
              validation={validation}
              currentRange={currentRange}
            />

            {/* CHALLENGES AND GOLAS */}
            <ChallengesAndGoals
              validation={validation}
              currentRange={currentRange}
            />

            {/* DECISION MAKING PROCESS */}
            <DecisionMakingProcess
              validation={validation}
              currentRange={currentRange}
            />

            {/* TIMELINE */}
            <Timeline validation={validation} currentRange={currentRange} />

            {/* ADDITIONAL INFORMATION */}
            <AdditionalInformation
              validation={validation}
              currentRange={currentRange}
            />

            {/* Action Buttons */}
            <div className=" gap-2 flex justify-end items-center mt-6 mb-8 flex-wrap">
              {/* Prev */}
              {currentRange > 1 && (
                <button
                  className={classNames(
                    "bg-[var(--base-color)] py-2 px-7 rounded-lg neue-regular font-medium text-white transition-all duration-300 hover:bg-[#035996] whitespace-nowrap",
                    {
                      "flex-1": currentRange === sectionList.length,
                      "bg-gray-500": true,
                      "order-5": currentRange === sectionList.length,
                    }
                  )}
                  type="button"
                  onClick={goToPrevSection}
                  disabled={submittingSurvey || loading}
                >
                  Go Back
                </button>
              )}

              {/* Next */}
              {currentRange > 0 && currentRange < sectionList.length && (
                <button
                  className={
                    "bg-[var(--base-color)] py-2 px-7 rounded-lg neue-regular font-medium text-white transition-all duration-300 hover:bg-[#035996]"
                  }
                  type="button"
                  onClick={goToNextSection}
                  disabled={submittingSurvey || loading}
                >
                  Next
                </button>
              )}

              {/* Submit */}
              {currentRange === sectionList.length && (
                <button
                  className="bg-[var(--base-color)] sm:py-2 px-4 sm:px-8 rounded-lg neue-regular font-medium text-white transition-all duration-300 hover:bg-[#035996] flex-1 text-xs sm:text-base py-3 whitespace-nowrap"
                  type="submit"
                  disabled={submittingSurvey}
                >
                  Book an Appointment
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="w-full h-[200px] bg-[var(--base-color)] flex flex-col items-center gap-6 justify-center">
        <p className="text-center text-white md:text-2xl neue-regular">
          All right Reserved. &copy; Adutem Innovation
        </p>

        {/* Socials */}
        <div className="text-white flex items-center gap-5 justify-center">
          <a target="_blank" href="https://www.instagram.com/adutem_tech">
            <i className="fi fi-brands-instagram flex text-2xl"></i>
          </a>
          <a
            href="https://www.tiktok.com/@adutem_tech.adute?_t=8iy70GF1tmY&_r=1"
            target="_blank"
          >
            <i className="fi fi-brands-tik-tok flex text-2xl"></i>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/Aduteminnovationmarketing/"
          >
            <i className="fi fi-brands-facebook flex text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/adutem-innovation-marketing/"
            target="_blank"
          >
            <i className="fi fi-brands-linkedin flex text-2xl"></i>
          </a>
        </div>
      </div>
    </>
  );
};
