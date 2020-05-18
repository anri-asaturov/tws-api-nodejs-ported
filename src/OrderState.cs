/* Copyright (C) 2019 Interactive Brokers LLC. All rights reserved. This code is subject to the terms
 * and conditions of the IB API Non-Commercial License or the IB API Commercial License, as applicable. */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;

namespace IBApi
{
    /**
     * @class OrderState
     * @brief Provides an active order's current state
     * @sa Order
     */
    public class OrderState
    {
        private string status;
        private string initMarginBefore;
        private string maintMarginBefore;
        private string equityWithLoanBefore;
        private string initMarginChange;
        private string maintMarginChange;
        private string equityWithLoanChange;
        private string initMarginAfter;
        private string maintMarginAfter;
        private string equityWithLoanAfter;
        private double commission;
        private double minCommission;
        private double maxCommission;
        private string commissionCurrency;
        private string warningText;
        private string completedTime;
        private string completedStatus;

        /**
         * @brief The order's current status
         */
        public string Status
        {
            get { return status; }
            set { status = value; }
        }

        /**
         * @brief The account's current initial margin.
         */
        public string InitMarginBefore
        {
            get { return initMarginBefore; }
            set { initMarginBefore = value; }
        }

        /**
        * @brief The account's current maintenance margin
        */
        public string MaintMarginBefore
        {
            get { return maintMarginBefore; }
            set { maintMarginBefore = value; }
        }

        /**
        * @brief The account's current equity with loan
        */
        public string EquityWithLoanBefore
        {
            get { return equityWithLoanBefore; }
            set { equityWithLoanBefore = value; }
        }

        /**
         * @brief The change of the account's initial margin.
         */
        public string InitMarginChange
        {
            get { return initMarginChange; }
            set { initMarginChange = value; }
        }

        /**
        * @brief The change of the account's maintenance margin
        */
        public string MaintMarginChange
        {
            get { return maintMarginChange; }
            set { maintMarginChange = value; }
        }

        /**
        * @brief The change of the account's equity with loan
        */
        public string EquityWithLoanChange
        {
            get { return equityWithLoanChange; }
            set { equityWithLoanChange = value; }
        }

        /**
         * @brief The order's impact on the account's initial margin.
         */
        public string InitMarginAfter
        {
            get { return initMarginAfter; }
            set { initMarginAfter = value; }
        }

        /**
        * @brief The order's impact on the account's maintenance margin
        */
        public string MaintMarginAfter
        {
            get { return maintMarginAfter; }
            set { maintMarginAfter = value; }
        }

        /**
        * @brief Shows the impact the order would have on the account's equity with loan
        */
        public string EquityWithLoanAfter
        {
            get { return equityWithLoanAfter; }
            set { equityWithLoanAfter = value; }
        }

        /**
          * @brief The order's generated commission.
          */
        public double Commission
        {
            get { return commission; }
            set { commission = value; }
        }

        /**
        * @brief The execution's minimum commission.
        */
        public double MinCommission
        {
            get { return minCommission; }
            set { minCommission = value; }
        }

        /**
        * @brief The executions maximum commission.
        */
        public double MaxCommission
        {
            get { return maxCommission; }
            set { maxCommission = value;  }
        }

        /**
         * @brief The generated commission currency
         * @sa CommissionReport
         */
        public string CommissionCurrency
        {
            get { return commissionCurrency; }
            set { commissionCurrency = value; }
        }

        /**
         * @brief If the order is warranted, a descriptive message will be provided.
         */
        public string WarningText
        {
            get { return warningText; }
            set { warningText = value;  }
        }

        public string CompletedTime
        {
            get { return completedTime; }
            set { completedTime = value; }
        }

        public string CompletedStatus
        {
            get { return completedStatus; }
            set { completedStatus = value; }
        }

        public OrderState()
        {
            Status = null;
            InitMarginBefore = null;
            MaintMarginBefore = null;
            EquityWithLoanBefore = null;
            InitMarginChange = null;
            MaintMarginChange = null;
            EquityWithLoanChange = null;
            InitMarginAfter = null;
            MaintMarginAfter = null;
            EquityWithLoanAfter = null;
            Commission = 0.0;
            MinCommission = 0.0;
            MaxCommission = 0.0;
            CommissionCurrency = null;
            WarningText = null;
            CompletedTime = null;
            CompletedStatus = null;
        }

        public OrderState(string status,
                string initMarginBefore, string maintMarginBefore, string equityWithLoanBefore,
                string initMarginChange, string maintMarginChange, string equityWithLoanChange,
                string initMarginAfter, string maintMarginAfter, string equityWithLoanAfter,
                double commission, double minCommission,
                double maxCommission, string commissionCurrency, string warningText,
                string completedTime, string completedStatus)
        {
            InitMarginBefore = initMarginBefore;
            MaintMarginBefore = maintMarginBefore;
            EquityWithLoanBefore = equityWithLoanBefore;
            InitMarginChange = initMarginChange;
            MaintMarginChange = maintMarginChange;
            EquityWithLoanChange = equityWithLoanChange;
            InitMarginAfter = initMarginAfter;
            MaintMarginAfter = maintMarginAfter;
            EquityWithLoanAfter = equityWithLoanAfter;
            Commission = commission;
            MinCommission = minCommission;
            MaxCommission = maxCommission;
            CommissionCurrency = commissionCurrency;
            WarningText = warningText;
            CompletedTime = completedTime;
            CompletedStatus = completedStatus;
        }

        public override bool Equals(Object other)
        {
            if (this == other)
                return true;

            OrderState state = other as OrderState;

            if (state == null)
                return false; 

            if (commission != state.commission ||
                minCommission != state.minCommission ||
                maxCommission != state.maxCommission)
            {
                return false;
            }

            if (Util.StringCompare(status, state.status) != 0 ||
                Util.StringCompare(initMarginBefore, state.initMarginBefore) != 0 ||
                Util.StringCompare(maintMarginBefore, state.maintMarginBefore) != 0 ||
                Util.StringCompare(equityWithLoanBefore, state.equityWithLoanBefore) != 0 ||
                Util.StringCompare(initMarginChange, state.initMarginChange) != 0 ||
                Util.StringCompare(maintMarginChange, state.maintMarginChange) != 0 ||
                Util.StringCompare(equityWithLoanChange, state.equityWithLoanChange) != 0 ||
                Util.StringCompare(initMarginAfter, state.initMarginAfter) != 0 ||
                Util.StringCompare(maintMarginAfter, state.maintMarginAfter) != 0 ||
                Util.StringCompare(equityWithLoanAfter, state.equityWithLoanAfter) != 0 ||
                Util.StringCompare(commissionCurrency, state.commissionCurrency) != 0 ||
                Util.StringCompare(completedTime, state.completedTime) != 0 ||
                Util.StringCompare(completedStatus, state.completedStatus) != 0)
            {
                return false;
            }

            return true;
        }

        public override int GetHashCode()
        {
            var hashCode = 1754944475;
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(Status);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(InitMarginBefore);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(MaintMarginBefore);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(EquityWithLoanBefore);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(InitMarginChange);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(MaintMarginChange);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(EquityWithLoanChange);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(InitMarginAfter);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(MaintMarginAfter);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(EquityWithLoanAfter);
            hashCode = hashCode * -1521134295 + Commission.GetHashCode();
            hashCode = hashCode * -1521134295 + MinCommission.GetHashCode();
            hashCode = hashCode * -1521134295 + MaxCommission.GetHashCode();
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(CommissionCurrency);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(WarningText);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(CompletedTime);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(CompletedStatus);
            return hashCode;
        }
    }
}
