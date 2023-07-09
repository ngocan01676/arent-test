import { useVm } from "../../hooks/useVm";
import { AppState } from "../../store/AppState";
import './style.scss'

export const  Footer: React.FC = () => {
    const vm = useVm<AppState>(AppState);
    return <>
        <footer>
            <div className="container footer-list-item d-flex">
                {vm.listItemInFooter.map((item: string, index: number) => (
                        <div className="item" key={index}>
                                <span>{item}</span>
                        </div>
                    ))}
            </div>
        </footer>
    </>
} 