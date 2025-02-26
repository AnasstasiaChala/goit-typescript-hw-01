interface PageDetails {
    createAt: Date;
    UpdateAt: Date;
}

interface Page {
    title: string;
    likes: number;
    accounts: string[];
    status: 'open' | 'close';
    details?: PageDetails;
}

const page1: Page = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        UpdateAt: new Date('2021-05-01'),
    }
}

const page2: Page = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
}
console.log('Page 1:', page1);
console.log('Page 2:', page2);
