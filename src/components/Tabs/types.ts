export interface ITabsProps {
    defaultTab: string;
    selectedTabValue: string
    setSelectedTabValue: React.Dispatch<React.SetStateAction<string>>
    tabsData: {
      tabValue: string
      tabText: string
    }[]
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  }