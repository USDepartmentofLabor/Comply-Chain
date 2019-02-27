import React from "react";
import LocalizedBreadcrumb from "./LocalizedBreadcrumb";
import Routes from "./routes";

const StepBreadcrumb = ({ match }) => {
    return (
        <LocalizedBreadcrumb
            string="general.step"
            extra={" " + match.params.step}
        />
    );
};

const TopicBreadcrumb = ({ match }) => {
    return (
        <LocalizedBreadcrumb
            string="general.topic"
            extra={" " + match.params.topic}
        />
    );
};

const Breadcrumb = string => {
    return <LocalizedBreadcrumb string={string} />;
};

export const breadcrumbs = [
    {
        path: Routes.Home,
        breadcrumb: Breadcrumb("general.home")
    },
    {
        path: Routes.Steps,
        breadcrumb: Breadcrumb("general.steps")
    },
    {
        path: Routes.Step.path,
        breadcrumb: StepBreadcrumb
    },
    {
        path: Routes.Topic.path,
        breadcrumb: TopicBreadcrumb
    },
    {
        path: `${Routes.Step.path}/topic`,
        breadcrumb: null
    },
    {
        path: Routes.About.path,
        breadcrumb: Breadcrumb("info.about.title")
    },
    {
        path: Routes.Basics.path,
        breadcrumb: Breadcrumb("info.basic.title")
    },
    {
        path: Routes.KeyResources.path,
        breadcrumb: Breadcrumb("info.keyResources.title")
    },
    {
        path: Routes.WhatAre.path,
        breadcrumb: Breadcrumb("info.whatAre.title")
    },
    {
        path: Routes.WhyDevelop.path,
        breadcrumb: Breadcrumb("info.whyDevelop.title")
    }
];
