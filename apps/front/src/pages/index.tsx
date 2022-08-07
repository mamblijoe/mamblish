import React from 'react';

import Button from '@/components/Button';

function IndexPage() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 data-testid="main-header">Next.js starter pack</h1>
            <Button label="Tets" primary={false} />
        </div>
    );
}

export default IndexPage;
