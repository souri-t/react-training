import React from 'react'
import { AppBar, Button, MenuItem, Select, Toolbar, Typography, styled } from '@mui/material';

const CustomAppBar = styled(AppBar)({
    backgroundColor: 'blue',
});
const CustomTypography = styled(Typography)({
    flexGrow: 1,
});
const ContentArea = styled("div")({
    // backgroundColor: '#e0e0e0'
});

const CustomSelect = styled(Select)({
    backgroundColor: 'white',
    color: 'black',
    padding: '5px',
    borderRadius: '5px',
    border: 'none',
});

type Props = {
    children?: React.ReactNode;
}

export default function Layout(props: Props) {
    return (
        <div>
             <AppBar position="static" style={{ marginBottom: '1rem' }}>
                <Toolbar>
                    <Button color="inherit">Menu 1</Button>
                    <Button color="inherit">Menu 2</Button>
                    <Button color="inherit">Menu 3</Button>
                </Toolbar>
            </AppBar>
            <ContentArea style={{ marginTop: '20px', padding: '0 20px' }}>
                {/* <h2>ページの内容</h2>
                <p>ここにページのコンテンツを追加します。</p> */}
                {props.children}
            </ContentArea>
        </div>
    )
}

// export default function Layout(props: Props) {
//     const handleMenuClick = (page: string) => {
//         // 選択されたページに対する処理を記述する
//         console.log(`選択されたページ: ${page}`);
//     };
//     return (
//         <div>
//             <CustomAppBar position="static">
//                 <Toolbar>
//                 <CustomTypography variant="h6">
//                     メニューバー
//                 </CustomTypography>
//                 {/* <CustomSelect
//                     value=""
//                     displayEmpty
//                     >
//                     <MenuItem value="" disabled>
//                     ページを選択してください
//                     </MenuItem>
//                     <MenuItem value="page1">ページ1</MenuItem>
//                     <MenuItem value="page2">ページ2</MenuItem>
//                     <MenuItem value="page3">ページ3</MenuItem>
//                 </CustomSelect> */}
//                 </Toolbar>
//             </CustomAppBar>
//             <ContentArea style={{ marginTop: '20px', padding: '0 20px' }}>
//                 {/* <h2>ページの内容</h2>
//                 <p>ここにページのコンテンツを追加します。</p> */}
//                 {props.children}
//             </ContentArea>
//         </div>
//     )
// }

